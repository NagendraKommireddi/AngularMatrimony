using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Collections.Specialized;
using System.Data.SqlClient;
using System.Net.Mail;
using System.Data;
using Matrimony.Models;
using System.Configuration;
using System.Text.RegularExpressions;
using System.IO;

namespace Matrimony.Models
{
    public class DataAccess
    {
        string Images="";
       // string[] Imagesarray;
        public  string Getallfiles(string Name)
        {
            DirectoryInfo d = new DirectoryInfo(@"C:\Users\kumar.kommireddi\Desktop\matrimony\Matrimony\src\assets\images\"+Name);//Assuming Test is your Folder
            FileInfo[] Files = d.GetFiles("*.jpg"); //Getting Text files
            //string str = "";
            foreach (FileInfo file in Files)
            {

                Images = Images + ", " + file.Name;
            }
            Images = Images.TrimStart(',');
            return Images;
        }
    

    //      string conString = ConfigurationManager.AppSettings.Get("constring");
    string conString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Matrimony;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        string EmailApi = ConfigurationManager.AppSettings.Get("Mail");
        string passapi = ConfigurationManager.AppSettings.Get("password");

        public IEnumerable<Register> GetAlldata() {
            try
            {
                SqlConnection con = new SqlConnection(conString);
                con.Open();
                SqlCommand cmd = new SqlCommand("SearchAll", con);
                SqlDataReader rdr = cmd.ExecuteReader();

                List<Register> list = new List<Register>();

                while (rdr.Read())
                {
                    Register item = new Register();
                    item.Id = Convert.ToInt16( rdr["MatrimonyId"]);
                    item.Profilefor = rdr["Profilefor"].ToString();
                    item.Name = rdr["Name"].ToString();
                    item.Gender = rdr["Gender"].ToString();
                    item.DOB = Convert.ToDateTime( rdr["DOB"]);
                    item.Religion = rdr["Religion"].ToString();
                    item.MotherTongue = rdr["MotherTongue"].ToString().ToLower();
                    item.Image = rdr["Image"].ToString();
                    item.MaritalStatus = rdr["MaritalStatus"].ToString().ToLower();
                    item.PhysicallyHandicapped = rdr["PhysicallyHandicapped"].ToString().ToLower();
                    item.DrinkingHabit = rdr["DrinkingHabit"].ToString().ToLower();
                    item.SmokingHabit = rdr["SmokingHabit"].ToString().ToLower();
                    item.Diet = rdr["Diet"].ToString().ToLower();
                    item.BodyType = rdr["BodyType"].ToString().ToLower();
                    item.Height = rdr["Height"].ToString();
                    item.FamilyStatus = rdr["FamilyStatus"].ToString();
                    item.FamilyType = rdr["FamilyType"].ToString();
                    item.FamilyValues = rdr["FamilyValues"].ToString();
                    item.Education = rdr["Education"].ToString();
                    item.AnnualIncome = rdr["AnnualIncome"].ToString();
                    item.EmployedIn = rdr["EmployedIn"].ToString();
                    item.Occupation = rdr["Occupation"].ToString();
                    item.LikedProfiles = rdr["LikedProfiles"].ToString();
                    item.LocationCity = rdr["LocationCity"].ToString();
                    item.LocationCountry = rdr["LocationCountry"].ToString();
                    item.LocationState = rdr["LocationState"].ToString();
                    item.Weight = rdr["Weight"].ToString();
                    item.Star = rdr["Star"].ToString();
                    item.Rasi = rdr["Rasi"].ToString();
                    item.TimeOfBirth = rdr["TimeOfBirth"].ToString();
                    item.PlaceOfBirthCountry = rdr["PlaceOfBirthCountry"].ToString();
                    item.PlaceOfBirthState = rdr["PlaceOfBirthState"].ToString();
                    item.PlaceOfBirthCity = rdr["PlaceOfBirthCity"].ToString();
                    item.FatherOccupation = rdr["FatherOccupation"].ToString();
                    item.MotherOccupation = rdr["MotherOccupation"].ToString();
                    item.Brothers = rdr["Brothers"].ToString();
                    item.Sisters = rdr["Sisters"].ToString();
                    item.BrothersMarried = rdr["BrothersMarried"].ToString();
                    item.SistersMarried = rdr["SistersMarried"].ToString();
                    item.ParentsContact = rdr["ParentsContact"].ToString();
                    item.AncestralOrigin = rdr["AncestralOrigin"].ToString();
                    item.Phone =rdr["Phone"].ToString();
                    item.EmailId= rdr["EmailId"].ToString();
                    item.Page1 = rdr["Page1"].ToString();
                    item.Page2 = rdr["Page2"].ToString();
                    item.Page3 = rdr["Page3"].ToString();
                    item.Paid = rdr["Paid"].ToString();
                  //  item.ImagesList = Getallfiles(item.Name);
                    list.Add(item);
                }
                rdr.Close();
                con.Close();
                return list;
            }
            catch {
                throw;
            }
            }

        public int  Insert(Register data) {

            SqlConnection con = new SqlConnection(conString);
            con.Open();

            SqlCommand cmd = new SqlCommand("InsertBasic", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Profilefor", data.Profilefor);
            cmd.Parameters.AddWithValue("@Name", data.Name);
            cmd.Parameters.AddWithValue("@Gender", data.Gender);
            cmd.Parameters.AddWithValue("@DOB", data.DOB);
            cmd.Parameters.AddWithValue("@Religion", data.Religion);
            cmd.Parameters.AddWithValue("@MotherTongue", data.MotherTongue);
            cmd.Parameters.AddWithValue("@Phoneno", data.Phone);
            cmd.Parameters.AddWithValue("@EmailId", data.EmailId);
            cmd.Parameters.AddWithValue("@Password", data.Password);
            cmd.Parameters.AddWithValue("@Image", data.Image);
            int i= cmd.ExecuteNonQuery();
            con.Close();
            return i;
        }

        public int InsertMax(Register data)
        {

            SqlConnection con = new SqlConnection(conString);
            con.Open();
            SqlCommand cmd = new SqlCommand("InsertMax", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@MaritalStatus", data.MaritalStatus);
            cmd.Parameters.AddWithValue("@Height", data.Height);
            cmd.Parameters.AddWithValue("@FamilyStatus", data.FamilyStatus);
            cmd.Parameters.AddWithValue("@FamilyType", data.FamilyType);
            cmd.Parameters.AddWithValue("@FamilyValues", data.FamilyValues);
            cmd.Parameters.AddWithValue("@PhysicallyHandicapped", data.PhysicallyHandicapped);
            cmd.Parameters.AddWithValue("@Education", data.Education);
            cmd.Parameters.AddWithValue("@EmployedIn", data.EmployedIn);
            cmd.Parameters.AddWithValue("@Occupation", data.Occupation);
            cmd.Parameters.AddWithValue("@AnnualIncome", data.AnnualIncome);
            cmd.Parameters.AddWithValue("@LocationCountry", data.LocationCountry);
            cmd.Parameters.AddWithValue("@LocationState", data.LocationState);
            cmd.Parameters.AddWithValue("@LocationCity", data.LocationCity);
            cmd.Parameters.AddWithValue("@BodyType", data.BodyType);
            cmd.Parameters.AddWithValue("@Weight", data.Weight);
            cmd.Parameters.AddWithValue("@Diet", data.Diet);
            cmd.Parameters.AddWithValue("@SmokingHabit", data.SmokingHabit);
            cmd.Parameters.AddWithValue("@DrinkingHabit", data.DrinkingHabit);
            cmd.Parameters.AddWithValue("@Star", data.Star);
            cmd.Parameters.AddWithValue("@Rasi", data.Rasi);
            cmd.Parameters.AddWithValue("@TimeOfBirth", data.TimeOfBirth);
            cmd.Parameters.AddWithValue("@POBCountry", data.PlaceOfBirthCountry);
            cmd.Parameters.AddWithValue("@POBState", data.PlaceOfBirthState);
            cmd.Parameters.AddWithValue("@POBCity", data.PlaceOfBirthCity);
            cmd.Parameters.AddWithValue("@FatherOccupation", data.FatherOccupation);
            cmd.Parameters.AddWithValue("@MotherOccupation", data.MotherOccupation);
            cmd.Parameters.AddWithValue("@Brothers", data.Brothers);
            cmd.Parameters.AddWithValue("@BrotherMarried", data.BrothersMarried);
            cmd.Parameters.AddWithValue("@Sisters", data.Sisters);
            cmd.Parameters.AddWithValue("@SistersMarried", data.SistersMarried);
            cmd.Parameters.AddWithValue("@ParentsContact", data.ParentsContact);
            cmd.Parameters.AddWithValue("@AncestralOrigin", data.AncestralOrigin);
            cmd.Parameters.AddWithValue("@Page1", data.Page1);
            cmd.Parameters.AddWithValue("@Page2", data.Page2);
            cmd.Parameters.AddWithValue("@Page3", data.Page3);
            cmd.Parameters.AddWithValue("@Phone", data.Phone);
            int i = cmd.ExecuteNonQuery();
            con.Close();
            return i;
        }

        public int Preference(Register data)
        {

            SqlConnection con = new SqlConnection(conString);
            con.Open();

            SqlCommand cmd = new SqlCommand("IF NOT EXISTS (SELECT * from Preference WHERE Phone = '" + data.Phone + "')" +
                                            " BEGIN "+
                                            "INSERT INTO Preference " +
                                            "VALUES('" + data.Phone + "','" + data.MaritalStatus + "','" + data.Height + "','" + data.FamilyStatus + "','" + data.FamilyType + "','" + data.FamilyValues + "','" + data.PhysicallyHandicapped + "','" + data.Education + "','" + data.EmployedIn + "','" + data.Occupation + "','" + data.AnnualIncome + "','" + data.LocationCountry + "','" + data.LocationState + "','" + data.LocationCity + "','" + data.BodyType + "','" + data.Weight + "','" + data.Diet + "','" + data.SmokingHabit + "','" + data.DrinkingHabit + "','" + data.Star + "','" + data.Rasi + "','" + data.TimeOfBirth + "','" + data.PlaceOfBirthCountry + "','" + data.PlaceOfBirthState + "','" + data.PlaceOfBirthCity + "')" +
                                            " END "+
                                            " ELSE " +
                                            " BEGIN "+
                                            " UPDATE Preference set Phone='" + data.Phone + "',MaritalStatus='" + data.MaritalStatus + "',Height='" + data.Height + "',FamilyStatus='" + data.FamilyStatus + "',FamilyType='" + data.FamilyType + "',FamilyValues='" + data.FamilyValues + "',PhysicallyHandicapped='" + data.PhysicallyHandicapped + "', Education='" + data.Education + "',EmployedIn='" + data.EmployedIn + "',Occupation='" + data.Occupation + "',AnnualIncome='" + data.AnnualIncome + "'," +
                                            "LocationCountry='" + data.LocationCountry + "',LocationState='" + data.LocationState + "',LocationCity='" + data.LocationCity + "',BodyType='" + data.BodyType + "',Weight='" + data.Weight + "',Diet='" + data.Diet + "',SmokingHabit='" + data.SmokingHabit + "',DrinkingHabit='" + data.DrinkingHabit + "',Star='" + data.Star + "',Rasi='" + data.Rasi + "',TimeOfBirth='" + data.TimeOfBirth + "',PlaceOfBirthCountry='" + data.PlaceOfBirthCountry + "',PlaceOfBirthState='" + data.PlaceOfBirthState + "',PlaceOfBirthCity='" + data.PlaceOfBirthCity + "'" +
                                            "WHERE Phone ='" + data.Phone + "'" +
                                            " END", con);

            //  SqlCommand cmd = new SqlCommand(" ", con);

            int i = cmd.ExecuteNonQuery();
            con.Close();
            return i;
        }

        public IEnumerable<Register> GetAlldataPrefered(string Phone)
        {
            try
            {
                SqlConnection con = new SqlConnection(conString);
                con.Open();
                SqlCommand cmd = new SqlCommand("select * from Preference where Phone='"+Phone+"'", con);
                SqlDataReader rdr = cmd.ExecuteReader();

                List<Register> list = new List<Register>();

                while (rdr.Read())
                {
                    Register item = new Register();
                    item.MaritalStatus = rdr["MaritalStatus"].ToString().ToLower();
                    item.PhysicallyHandicapped = rdr["PhysicallyHandicapped"].ToString().ToLower();
                    item.DrinkingHabit = rdr["DrinkingHabit"].ToString().ToLower();
                    item.SmokingHabit = rdr["SmokingHabit"].ToString().ToLower();
                    item.Diet = rdr["Diet"].ToString().ToLower();
                    item.BodyType = rdr["BodyType"].ToString().ToLower();
                    item.Height = rdr["Height"].ToString();
                    item.FamilyStatus = rdr["FamilyStatus"].ToString();
                    item.FamilyType = rdr["FamilyType"].ToString();
                    item.FamilyValues = rdr["FamilyValues"].ToString();
                    item.Education = rdr["Education"].ToString();
                    item.AnnualIncome = rdr["AnnualIncome"].ToString();
                    item.EmployedIn = rdr["EmployedIn"].ToString();
                    item.Occupation = rdr["Occupation"].ToString();
                    // item.AnnulaIncome = rdr["AnnualIncome"].ToString();
                    item.LocationCity = rdr["LocationCity"].ToString();
                    item.LocationCountry = rdr["LocationCountry"].ToString();
                    item.LocationState = rdr["LocationState"].ToString();
                    item.Weight = rdr["Weight"].ToString();
                    item.Star = rdr["Star"].ToString();
                    item.Rasi = rdr["Rasi"].ToString();
                    item.TimeOfBirth = rdr["TimeOfBirth"].ToString();
                    item.PlaceOfBirthCountry = rdr["PlaceOfBirthCountry"].ToString();
                    item.PlaceOfBirthState = rdr["PlaceOfBirthState"].ToString();
                    item.PlaceOfBirthCity = rdr["PlaceOfBirthCity"].ToString();
                    list.Add(item);
                }
                rdr.Close();
                con.Close();
                return list;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Register> Login(string username,string password)
        {
            string[] value=new string[2];
            List<Register> list = new List<Register>();
            try
            {
                SqlConnection con = new SqlConnection(conString);
                con.Open();
                SqlCommand cmd = new SqlCommand("Login ", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", username);
                cmd.Parameters.AddWithValue("@password", password);
                SqlDataReader rdr = cmd.ExecuteReader();
                if (rdr.Read())
                 {
                    Register item = new Register();
                    item.Gender = rdr["Gender"].ToString();
                    item.LikedProfiles = rdr["LikedProfiles"].ToString();
                    item.Paid = rdr["Paid"].ToString();
                    item.Image = Images;
                    item.Phone = rdr["Phone"].ToString();
                    item.Page1 = rdr["Page1"].ToString();
                    item.Page2 = rdr["Page2"].ToString();
                    item.Page3 = rdr["Page3"].ToString();
                    list.Add(item);
                    
                    //rdr["Gender"].ToString();
                    //       value[0]= rdr["Gender"].ToString();
                    //     value[1] = rdr["Paid"].ToString();


                }
                rdr.Close();
                con.Close();
                return list;
            }
            
            catch
            {
                throw;
            }
        }

        public int ForgetPassword(Forget forget) {
            int i = 0;
            try
            {
                SqlConnection con = new SqlConnection(conString);
                con.Open();
                SqlCommand cmd = new SqlCommand("Forget", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Password", forget.NewPassword);
                cmd.Parameters.AddWithValue("@Phoneno", forget.PhoneNo);
                i =cmd.ExecuteNonQuery();
                con.Close();
            }
            catch
            {
                throw;
            }
            return i;
        }
        public string SendSMS(string phone) {
            string result = "";
            SqlConnection con = new SqlConnection(conString);
            Random generator = new Random();
            String Otp = generator.Next(0, 999999).ToString("D6");
            int mid = Otp.Length / 2; //get the middle of the String
            String[] parts = { Otp.Substring(0, mid), Otp.Substring(mid) };
            Console.Write(parts[0], parts[1]);
            con.Open();
            SqlCommand cmd = new SqlCommand("PhoneBasedSearch",con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Phoneno", phone);
            SqlDataReader rdr = cmd.ExecuteReader();
            if (rdr.Read())
            {
                string email = rdr["EmailId"].ToString();
                rdr.Close();
                SqlCommand cmnd = new SqlCommand("Otp", con);
                cmnd.CommandType = CommandType.StoredProcedure;
                cmnd.Parameters.AddWithValue("@Otp", Otp);
                cmnd.Parameters.AddWithValue("@Phoneno", phone);
                cmnd.ExecuteNonQuery();
                con.Close();
                string From, Message ,Hashkey;
                string Num;
                From = EmailApi;
                Hashkey = ConfigurationManager.AppSettings.Get("txtapi");
                Message = "Otp First 3 letters for your Matrimony Password Change  "+parts[0];
                Num = phone;
                var web = new System.Net.WebClient();
                //string url = "";
                string url = "https://api.textlocal.in/send/?username=" + From + "&hash=" + Hashkey + "&sender=TXTLCL&numbers=" + Num + "&message=" + Message;
                        //  "https://api.textlocal.in/send/?username=" + From + "&hash=" + Hashkey + "&sender=TXTLCL&numbers=" + TxtPhnNum.Text + "&message=" + otp;


                result = web.DownloadString(url);

                //sending email
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress(EmailApi);
                mail.To.Add(email);
                mail.Subject = "Matrimony Password Change Otp";
                mail.Body = "Here is the last 3 letters for your otp for matrimony password change "+parts[1];

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential(EmailApi,passapi );
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);

                rdr.Close();
            }

            else
            {
               
            }
            return result;
        }

        public int VerifyOtp(string Otp) {
            SqlConnection con = new SqlConnection(conString);
            int i=0;
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from Registration where Otp='" + Otp + "' ", con);
            SqlDataReader rdr = cmd.ExecuteReader();
            if (rdr.Read()) {
                i = 1;
            }
            rdr.Close();
            con.Close();
            return i;
        }

        public void sendEmail(string LoggedInPhone,string Email,string Phone ) {
            try
            {
                string likednums="";
                string Loggedinname = "";
                SqlConnection con = new SqlConnection(conString);
                con.Open();
                try
                {
                    SqlCommand cmd = new SqlCommand("Update Registration set LikedProfiles=LikedProfiles+1 Where Phone='" + Phone + "'", con);
                    cmd.ExecuteNonQuery();
                    SqlCommand command = new SqlCommand("Select LikedQueue from Registration where Phone ='" + Phone + "' ",con);
       
                    SqlDataReader rdr = command.ExecuteReader();
                    while (rdr.Read()) {
                        likednums=  rdr["LikedQueue"].ToString();
                        if (likednums == "")
                        {
                            likednums = LoggedInPhone.ToString() + ",";
                        }
                        else
                        {
                            likednums = likednums + "," + LoggedInPhone.ToString() + ",";
                        }
                    }
                    likednums=likednums.TrimEnd(',');
                    rdr.Close();
                    SqlCommand cmd2 = new SqlCommand("Update Registration set LikedQueue='" + likednums + "'where Phone ='" + Phone + "' ", con);
                    cmd2.ExecuteNonQuery();
                    con.Close();
                }
                catch  {
                    throw;
                }
                con.Open();
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                SqlCommand sqlCommand = new SqlCommand("Select Name from Registration where Phone='"+LoggedInPhone+"'",con);
                SqlDataReader newreader = sqlCommand.ExecuteReader();
                if (newreader.Read()) {
                    Loggedinname = newreader["Name"].ToString();
                }
                newreader.Close();
                mail.From = new MailAddress(EmailApi);
                mail.To.Add(Email);
                mail.Subject = "Matrimony Notifications";
                mail.Body = "'"+Loggedinname+"'has viewed your profile";
                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential(EmailApi, passapi);
                SmtpServer.EnableSsl = true;
                SmtpServer.Send(mail);
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Register> Preferedsearch(string Phone) {
            SqlConnection con = new SqlConnection(conString);
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from Preference Where Phone='"+Phone+"'", con);
            
            SqlDataReader rdr = cmd.ExecuteReader();
            List<Register> list = new List<Register>();
            while (rdr.Read()) {
                Register item = new Register();
                item.MaritalStatus = rdr["MaritalStatus"].ToString().ToLower();
                item.PhysicallyHandicapped = rdr["PhysicallyHandicapped"].ToString().ToLower();
                item.DrinkingHabit = rdr["DrinkingHabit"].ToString().ToLower();
                item.SmokingHabit = rdr["SmokingHabit"].ToString().ToLower();
                item.Diet = rdr["Diet"].ToString().ToLower();
                item.BodyType = rdr["BodyType"].ToString().ToLower();
                item.Height = rdr["Height"].ToString();
                item.FamilyStatus = rdr["FamilyStatus"].ToString();
                item.FamilyType = rdr["FamilyType"].ToString();
                item.FamilyValues = rdr["FamilyValues"].ToString();
                item.Education = rdr["Education"].ToString();
                item.AnnualIncome = rdr["AnnualIncome"].ToString();
                item.EmployedIn = rdr["EmployedIn"].ToString();
                item.Occupation = rdr["Occupation"].ToString();
                // item.AnnulaIncome = rdr["AnnualIncome"].ToString();
                item.LocationCity = rdr["LocationCity"].ToString();
                item.LocationCountry = rdr["LocationCountry"].ToString();
                item.LocationState = rdr["LocationState"].ToString();
                item.Weight = rdr["Weight"].ToString();
                item.Star = rdr["Star"].ToString();
                item.Rasi = rdr["Rasi"].ToString();
                item.TimeOfBirth = rdr["TimeOfBirth"].ToString();
                item.PlaceOfBirthCountry = rdr["PlaceOfBirthCountry"].ToString();
                item.PlaceOfBirthState = rdr["PlaceOfBirthState"].ToString();
                item.PlaceOfBirthCity = rdr["PlaceOfBirthCity"].ToString();
                list.Add(item);
            }
            rdr.Close();
            //SqlCommand cmnd = new SqlCommand("select * from Registration where MaritalStatus='"+list[0]+"'");
            Console.Write(list);
            SqlCommand cmnd = new SqlCommand("select * from Registration where MaritalStatus='"+list[0].MaritalStatus+"' AND PhysicallyHandicapped='"+list[0].PhysicallyHandicapped+"' AND DrinkingHabit='"+list[0].DrinkingHabit+"' AND SmokingHabit='"+list[0].SmokingHabit+"' AND Diet='"+list[0].Diet+"' AND " +
                "BodyType='"+list[0].BodyType+"' AND Height='"+list[0].Height+"' AND FamilyStatus='"+list[0].FamilyStatus+"' AND FamilyType='"+list[0].FamilyType+"' AND FamilyValues='"+list[0].FamilyValues+"' AND Education='"+list[0].Education+"' AND AnnualIncome='"+list[0].AnnualIncome+"' AND EmployedIn='"+list[0].EmployedIn+"' " +
                "AND Occupation='"+list[0].Occupation+"' AND LocationCountry='"+list[0].LocationCountry+"' AND LocationState='"+list[0].LocationState+"' AND Weight='"+list[0].Weight+"' AND Star='"+list[0].Star+"' AND Rasi='"+list[0].Rasi+"' AND TimeOfBirth='"+list[0].TimeOfBirth+"'AND PlaceOfBirthCountry='"+list[0].PlaceOfBirthCountry+"'" +
                "AND PlaceOfBirthState='"+list[0].PlaceOfBirthState+"' AND PlaceOfBirthCity='"+list[0].PlaceOfBirthCity+"'",con );
            SqlDataReader reader = cmnd.ExecuteReader();

            List<Register> list2 = new List<Register>();

            while (reader.Read())
            {
                Register item = new Register();
                item.Id = Convert.ToInt16(reader["MatrimonyId"]);
                item.Profilefor = reader["Profilefor"].ToString();
                item.Name = reader["Name"].ToString();
                item.Gender = reader["Gender"].ToString();
                item.DOB = Convert.ToDateTime( reader["DOB"]);
                item.Religion = reader["Religion"].ToString();
                item.MotherTongue = reader["MotherTongue"].ToString().ToLower();
                item.Image = reader["Image"].ToString();
                item.MaritalStatus = reader["MaritalStatus"].ToString().ToLower();
                item.PhysicallyHandicapped = reader["PhysicallyHandicapped"].ToString().ToLower();
                item.DrinkingHabit = reader["DrinkingHabit"].ToString().ToLower();
                item.SmokingHabit = reader["SmokingHabit"].ToString().ToLower();
                item.Diet = reader["Diet"].ToString().ToLower();
                item.BodyType = reader["BodyType"].ToString().ToLower();
                item.Height = reader["Height"].ToString();
                item.FamilyStatus = reader["FamilyStatus"].ToString();
                item.FamilyType = reader["FamilyType"].ToString();
                item.FamilyValues = reader["FamilyValues"].ToString();
                item.Education = reader["Education"].ToString();
                item.AnnualIncome = reader["AnnualIncome"].ToString();
                item.EmployedIn = reader["EmployedIn"].ToString();
                item.Occupation = reader["Occupation"].ToString();
                // item.AnnulaIncome = rdr["AnnualIncome"].ToString();
                item.LocationCity = reader["LocationCity"].ToString();
                item.LocationCountry = reader["LocationCountry"].ToString();
                item.LocationState = reader["LocationState"].ToString();
                item.Weight = reader["Weight"].ToString();
                item.Star = reader["Star"].ToString();
                item.Rasi = reader["Rasi"].ToString();
                item.TimeOfBirth = reader["TimeOfBirth"].ToString();
                item.PlaceOfBirthCountry = reader["PlaceOfBirthCountry"].ToString();
                item.PlaceOfBirthState = reader["PlaceOfBirthState"].ToString();
                item.PlaceOfBirthCity = reader["PlaceOfBirthCity"].ToString();
                item.FatherOccupation = reader["FatherOccupation"].ToString();
                item.MotherOccupation = reader["MotherOccupation"].ToString();
                item.Brothers = reader["Brothers"].ToString();
                item.Sisters = reader["Sisters"].ToString();
                item.BrothersMarried = reader["BrothersMarried"].ToString();
                item.SistersMarried = reader["SistersMarried"].ToString();
                item.ParentsContact = reader["ParentsContact"].ToString();
                item.AncestralOrigin = reader["AncestralOrigin"].ToString();
                item.Phone = reader["Phone"].ToString();
                item.EmailId = reader["EmailId"].ToString();
                item.Page1 = reader["Page1"].ToString();
                item.Page2 = reader["Page2"].ToString();
                item.Page3 = reader["Page3"].ToString();
                item.Paid = reader["Paid"].ToString();
                list2.Add(item);
            }
            reader.Close();
            con.Close();
            return list2;


        }


        public IEnumerable<Register> LikedUsers(string Phone) {



            string LikedQueue = "";
            SqlConnection con = new SqlConnection(conString);
            con.Open();
            SqlCommand sql = new SqlCommand("Update Registration set LikedProfiles=0 where Phone ='" + Phone + "'",con);
            sql.ExecuteNonQuery();
            SqlCommand cmd = new SqlCommand("Select LikedQueue from Registration where Phone ='" + Phone + "' ",con);
            SqlDataReader reader= cmd.ExecuteReader();
            if (reader.Read()) {
                LikedQueue = reader["LikedQueue"].ToString();
            }
            LikedQueue = LikedQueue.TrimEnd(',');
            string[] LikedQueues=LikedQueue.Split(',');
            reader.Close();
            List<Register> list = new List<Register>();
            //SqlCommand command = new SqlCommand("Select * from Registration Where Phone In (@list)", con);
            string query= "select * from Registration where Phone in ('" + String.Join("','",LikedQueues) + "')";
            SqlCommand command = new SqlCommand(query, con);

            SqlDataReader rdr = command.ExecuteReader();
            
            while (rdr.Read()) {
                Register item = new Register();
                // item.Id = Convert.ToInt16(rdr["MatrimonyId"]);
                item.Profilefor = rdr["Profilefor"].ToString();
                item.Name = rdr["Name"].ToString();
                item.Gender = rdr["Gender"].ToString();
                item.DOB = Convert.ToDateTime( rdr["DOB"]);
                item.Religion = rdr["Religion"].ToString();
                item.MotherTongue = rdr["MotherTongue"].ToString().ToLower();
                item.Image = rdr["Image"].ToString();
                item.MaritalStatus = rdr["MaritalStatus"].ToString().ToLower();
                item.PhysicallyHandicapped = rdr["PhysicallyHandicapped"].ToString().ToLower();
                item.DrinkingHabit = rdr["DrinkingHabit"].ToString().ToLower();
                item.SmokingHabit = rdr["SmokingHabit"].ToString().ToLower();
                item.Diet = rdr["Diet"].ToString().ToLower();
                item.BodyType = rdr["BodyType"].ToString().ToLower();
                item.Height = rdr["Height"].ToString();
                item.FamilyStatus = rdr["FamilyStatus"].ToString();
                item.FamilyType = rdr["FamilyType"].ToString();
                item.FamilyValues = rdr["FamilyValues"].ToString();
                item.Education = rdr["Education"].ToString();
                item.AnnualIncome = rdr["AnnualIncome"].ToString();
                item.EmployedIn = rdr["EmployedIn"].ToString();
                item.Occupation = rdr["Occupation"].ToString();
                item.LikedProfiles = rdr["LikedProfiles"].ToString();
                item.LocationCity = rdr["LocationCity"].ToString();
                item.LocationCountry = rdr["LocationCountry"].ToString();
                item.LocationState = rdr["LocationState"].ToString();
                item.Weight = rdr["Weight"].ToString();
                item.Star = rdr["Star"].ToString();
                item.Rasi = rdr["Rasi"].ToString();
                item.TimeOfBirth = rdr["TimeOfBirth"].ToString();
                item.PlaceOfBirthCountry = rdr["PlaceOfBirthCountry"].ToString();
                item.PlaceOfBirthState = rdr["PlaceOfBirthState"].ToString();
                item.PlaceOfBirthCity = rdr["PlaceOfBirthCity"].ToString();
                item.FatherOccupation = rdr["FatherOccupation"].ToString();
                item.MotherOccupation = rdr["MotherOccupation"].ToString();
                item.Brothers = rdr["Brothers"].ToString();
                item.Sisters = rdr["Sisters"].ToString();
                item.BrothersMarried = rdr["BrothersMarried"].ToString();
                item.SistersMarried = rdr["SistersMarried"].ToString();
                item.ParentsContact = rdr["ParentsContact"].ToString();
                item.AncestralOrigin = rdr["AncestralOrigin"].ToString();
                item.Phone = rdr["Phone"].ToString();
                item.EmailId = rdr["EmailId"].ToString();
                item.Page1 = rdr["Page1"].ToString();
                item.Page2 = rdr["Page2"].ToString();
                item.Page3 = rdr["Page3"].ToString();
                item.Paid = rdr["Paid"].ToString();
                list.Add(item);
            }
            rdr.Close();
            con.Close();
            return list;
        }

        public void Upload(Images data) {
            Console.Write(data.Image);
        }


        public int setProfile(SetProfile data)
        {
            SqlConnection con = new SqlConnection(conString);
            con.Open();
            SqlCommand sqlCommand = new SqlCommand("Update Registration Set Image='" + data + "' where Phone='" + data + "'",con);
            int i=sqlCommand.ExecuteNonQuery();
            return i;
        }

    }

    
}