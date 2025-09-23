
const Container = () => {
    return (
    <div className="flex  h-[80vh] w-[40vw] bg-gradient-to-br from-[hsl(317,13%,52%)] to-[hsl(317,13%,22%)] rounded-4xl ">
        <div className="flex flex-col items-center justify-center gap-4 h-[60vh] w-[40vw]">
        <input type="email" placeholder="Email" className="w-[30vw] h-[5vh] rounded-xl p-2 border-amber-50 border-2" />
        <input type="password" placeholder="Password" className="w-[30vw] h-[5vh] rounded-xl p-2 border-amber-50 border-2" />
        <p href="#" className="text-black cursor-pointer hover:text-[hsl(200,43%,78%)]">Forgot Password?</p>
        <button className="w-[30vw] h-[5vh] rounded-xl p-2 border-amber-50 border-2 cursor-pointer hover:bg-[hsl(317,13%,42%)] duration-200">Login</button>
        <p href="#" className="text-black">Don't have an account? <span className="text-[hsl(200,43%,50%)] cursor-pointer hover:text-[hsl(200,43%,78%)]">Signup Now</span></p>
        </div>
    </div>
    )
}

export default Container
