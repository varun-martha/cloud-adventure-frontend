/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import User from "../../types/User"
import './signup.css'
import userLogo from '../../assets/user.png'

const Signup = () => {

    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [profile, setProfile] = useState(null);
    const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setUser((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    const uploadProfile = (event: any) => {
        
        const file = event.target.files[0]
        if(!validFileTypes.find(type => type === file.type)) {
            alert("File should be JPG/PNG format");
            return ;
        }
        setProfile(file);
    }

    const handleClick = async(event: any) => {
        event.preventDefault();
        try{
            if(!user.firstName.trim() || !user.lastName.trim() || !user.email || !user.password ){
                alert("All fields are required");
                clearAllFields();
                return;
            }
            if(!profile) {
                alert("Choose profile avatar");
                return;
            }
            const formData = new FormData();
            formData.append('firstName', user.firstName);
            formData.append('lastName', user.lastName);
            formData.append('email', user.email);
            formData.append('password', user.password);
            formData.append('image', profile);
            console.log(formData);
            const response = await fetch(`${import.meta.env.VITE_API_URL}register`, {
                method: 'POST',
                body: formData,
            });
            if(response.ok) {
                alert("Successfully created user");
                clearAllFields();
                return;
            }
            const result = await response.json();
            alert(result.message);
            clearAllFields();

        }catch(error) {
            console.error(error)
            alert('Error occurred')
        }
    }

    const clearAllFields = () => {
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
        setProfile(null);
    }

  return (
    <div className="signup-box">
        {profile ? <img src={URL.createObjectURL(profile)} alt="My avatar" className="avatar"/> :
        <img src={userLogo} alt="My avatar" className="avatar"/>}
        <form onSubmit={handleClick} className="signup-form">
            <input type="text" 
                name="firstName"
                placeholder="firstname" 
                required 
                value={user.firstName}
                onChange={handleChange}
                className="input-box"
            />
            <input type="text" 
                name="lastName" 
                placeholder="lastname" 
                required
                value={user.lastName}
                onChange={handleChange}
                className="input-box"
            />
            <input type="email" 
                name="email" 
                placeholder="email" 
                required
                value={user.email}
                onChange={handleChange}
                className="input-box"
            />
            <input type="password" 
                name="password" 
                placeholder="password" 
                required
                value={user.password}
                onChange={handleChange}
                className="input-box"
            />
            <input type="file"
                onChange={uploadProfile}
            />
            <input type="submit" 
                name="submit" 
                value="Register"
                className="submit-button"
            />
        </form>
    </div>
  )
}

export default Signup;