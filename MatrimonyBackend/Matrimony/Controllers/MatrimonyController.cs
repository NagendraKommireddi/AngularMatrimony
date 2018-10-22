using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Matrimony.Models;
using System.IO;
using System.Web;


namespace Matrimony.Controllers
{
    public class MatrimonyController : ApiController
    {
        DataAccess obj = new DataAccess();

        [HttpGet]
        [Route("api/Matrimony")]
        public IEnumerable<Register> GetData()
        {
            
            return obj.GetAlldata();
        }
        [HttpGet]
        [Route("api/Matrimony/prefered/{value}")]
        public IEnumerable<Register> GetDataPrefered(string value)
        {
            return obj.GetAlldataPrefered(value);
        }

        [HttpGet]
        [Route("api/Matrimony/Pfsearch/{value}")]
        public IEnumerable<Register> Getpreferedsearch(string value)
        {
            return obj.Preferedsearch(value);
        }

        [HttpGet]
        [Route("api/Matrimony/{value1}/{value2}")]
        public IEnumerable<Register> Login(string value1, string value2)
        {
            obj.Getallfiles(value1);
            return obj.Login(value1, value2);
        }


        [HttpPost]
        [Route("api/Matrimony/basic")]
        public int Insert([FromBody] Register data) {
            return obj.Insert(data);
        }
        [HttpPost]
        [Route("api/Matrimony/Extra")]
        public int InsertMax([FromBody] Register data) {
            return obj.InsertMax(data);
        }

        [HttpPost]
        [Route("api/Matrimony/Preference")]
        public int Preference([FromBody] Register data) {
            return obj.Preference(data);
        }

        [HttpPut]
        [Route("api/Matrimony/forgetpassword")]
        public int ForgetPassword([FromBody]Forget data) {
            return obj.ForgetPassword(data);
        }
        [HttpGet]
        [Route("api/Matrimony/SendOtp/{value}")]
        public string SendOtp(string value) {
            return obj.SendSMS(value);
        }
        [HttpGet]
        [Route("api/Matrimony/VerifyOtp/{value}")]
        public int VerifyOtp(string value)
        {
            return obj.VerifyOtp(value);
        }
        [HttpGet]
        [Route("api/Matrimony/SendEMail/{value1}/{value2}/{value3}")]
        public void SendEmail(string value1, string value2, string value3)
        {
            obj.sendEmail(value1, value2, value3);
        }
        [HttpGet]
        [Route("api/Matrimony/Liked/{value}")]
        public IEnumerable<Register> Liked(string value ){
            return obj.LikedUsers(value);
        }

        [HttpPost]
        [Route("api/Matrimony/SetProfile")]
        public int SetProfile([FromBody] SetProfile setProfile )
        {
            return obj.setProfile(setProfile);
        }


        [HttpPost]
        [Route("api/Matrimony/Upload")]


        public  HttpResponseMessage UploadJsonFile() {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    string[] files;
                    files = file.Split(',');
                    var name = files[0];
                    var filep = files[1];
                    var postedFile = httpRequest.Files[file];
                    // var filePath = HttpContext.Current.Server.MapPath("~/UploadFile/" + postedFile.FileName);
                    var filePath = @"C:\Users\kumar.kommireddi\Desktop\matrimony\Matrimony\src\assets\images\";
                    filePath = Path.Combine(filePath, name,postedFile.FileName);
                    postedFile.SaveAs(filePath);
                }
            }
            return response;
        }
    }
}
