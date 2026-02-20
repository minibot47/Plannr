import Nav from "./nav";

export default function Signup(){
    return(
        <div className="w-full min-h-[90vh] flex flex-col items-center justify-center max-w-[1440px] m-auto px-4">
            <Nav/>
            <div className="flex flex-col items-start justify-center w-full max-w-[458px] m-auto text-white gap-3">
                <h2 className="text-4xl sm:text-5xl">Sign up. <br/> <span className="text-[#FF4C00]">Get Started.</span></h2>
                
                <input 
                    type="text" 
                    required 
                    placeholder="Email or username" 
                    className="h-[40px] w-full bg-[#FFFFFF05] border-[0.1px] border-[#FFFFFF1F] rounded-[12px] px-3 text-white placeholder:text-gray-500 outline-none focus:border-[#FF4C00] transition-colors"
                />
                
                <input 
                    type="password" 
                    required 
                    placeholder="Password" 
                    className="h-[40px] w-full bg-[#FFFFFF05] border-[0.1px] border-[#FFFFFF1F] rounded-[12px] px-3 text-white placeholder:text-gray-500 outline-none focus:border-[#FF4C00] transition-colors"
                />
                
                <button className="w-full bg-[#FF4C00] py-2 rounded-[12px] font-light hover:bg-[#FF5C10] transition-colors">
                    Log in
                </button>
                
                {/* DIVIDER - Fixed */}
                <div className="flex items-center gap-3 sm:gap-4 w-full my-2">
                    <div className="flex-1 h-[0.5px] bg-gray-600"></div>
                    <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Or authorize with</span>
                    <div className="flex-1 h-[0.5px] bg-gray-600"></div>
                </div>
                
                <button className="w-full bg-[#FFFFFF1F] py-3 rounded-[12px] font-light hover:bg-[#FFFFFF2F] transition-colors flex items-center justify-center gap-2">
                    <img src="/images/google.png" alt="Google" className="w-[24px] h-[24px]" />
                    Sign Up with Google
                </button>
                
                <button className="w-full bg-[#FFFFFF1F] py-3 rounded-[12px] font-light hover:bg-[#FFFFFF2F] transition-colors flex items-center justify-center gap-2">
                    <img src="/images/Facebook.png" alt="Facebook" className="w-[24px] h-[24px]" />
                    Sign Up with Facebook
                </button>
                
                <button className="w-full bg-[#FFFFFF1F] py-3 rounded-[12px] font-light hover:bg-[#FFFFFF2F] transition-colors flex items-center justify-center gap-2">
                    <img src="/images/Apple.png" alt="Apple" className="w-[24px] h-[24px]" />
                    Sign Up with Apple
                </button>
                
                <h3 className="text-center w-full mt-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                    Forgot password?
                </h3>
                
                <h3 className="text-center w-full text-sm text-gray-400">
                    Don't have an account? <span className="text-[#FF4C00] cursor-pointer hover:underline">Sign up</span>
                </h3>
            </div>
        </div>
    )
}