import  React  from 'react';
import   './Login.module.css';

const Register:React.FC = () => {
    return (
        <>
            <form className={[['login100-form'],['flex-sb'],['flex-w']].join(' ')} style={{height:"461.2px"}}>
                    <div style={{width:"100%"}}>
                    <div style={{textAlign:'center'}}><span>Sign Up with Social Account</span></div>
                        <div style={{display:"inline-flex",width:"100%",marginTop:"15px"}}>
                            <a href="#" style={{marginLeft:"5px"}} className={[['btn-face'],['m-b-21']].join(' ')}>
                                <i className="fa fa-facebook-official"></i>
                                Facebook
                            </a>
                            <a href="#" style={{marginLeft:"15px"}} className={[['btn-google'],['m-b-21']].join(' ')}>
                                <img src={require('../../img/icon-google.png')} alt="GOOGLE"/>
                                Google
                            </a>			
                        </div>
                        <div style={{textAlign:'center'}}><span>Or</span></div>
                    <div style={{marginBottom:"10px"}}>
                    <div  className={[['p-t-31'],['p-b-9']].join(' ')}>
						<span className={'txt11'}>
							Email
						</span>
					
					</div>
					<div className={'wrap-input100'}  data-validate = "Email is required">
						<input className={'input100'}  type="text" name="Email"/>
						<span className={'focus-input100'}></span>
												
					</div>
					{/* {NameState && <p style={{color:"red"}}>UserName is invalid</p>} */}
					<div  className={'p-t-13'}>
						<span  className={'txt1'}>
							Password
						</span>

						<a href="#" className={'txt2'}>
							Forgot?
						</a>
					</div>
					<div className={'wrap-input100'} data-validate = "Password is required">
						<input className={'input100'} type="password" name="pass"/>
						<span className={'focus-input100'} ></span>					
					</div>
					{/* {PassState && <p style={{color:"red"}}>Password is invalid</p>} */}

					<div className={[['container-login100-form-btn'],['m-t-17']].join(' ')} style={{marginBottom:'5px'}}>
					
						<input className={'login100-form-btn'} type="submit" value="Sign Up" name="Sign Up" />

					</div>
                        </div>	                                  			
                   
                 </div >		 
				</form>
        </>
    );
   
};

export default Register;