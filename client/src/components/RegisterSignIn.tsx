import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const RegisterSingIn = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full max-w-3xl items-center justify-center gap-4 m-auto">
      <Card className="w-full sm:w-4/5">
        <CardHeader>
          <CardTitle className="text-3xl font-black text-slate-700">
            Register
          </CardTitle>
          <CardDescription className="mt-2 mb-5 text-base leading-tight text-gray-600">
            Register yourself here with your relevant Community!
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-3">
          <Link to="/player-registration" className="w-full">
            <Button className="w-full">As Player</Button>
          </Link>
          <Link to="/team-registration" className="w-full">
            <Button className="w-full">As Team</Button>
          </Link>
          <Link to="/umpire-registration" className="w-full">
            <Button className="w-full">As Umpire</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full sm:w-4/5">
        <CardHeader>
          <CardTitle className="text-3xl font-black text-slate-700">
            Sign In
          </CardTitle>
          <CardDescription className="mt-2 mb-5 text-base leading-tight text-gray-600">
            Sign In if you already have a account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-600"
              >
                {" "}
                Enter Your Email{" "}
              </label>
            </div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="password"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-600"
              >
                {" "}
                Enter Your Password
              </label>
            </div>
            <Button className="mt-4 w-full " type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterSingIn;
