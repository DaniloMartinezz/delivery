import PlanetWithParticles from "./components/PlanetWithParticles";
import SignUpForm from './components/signUpForm';

export default function Register() {
    return (
        <div className="p-5 font-inter bg-bgdark flex flex-col justify-center items-center">
            <div className="absolute top-[-20vh] left-5  z-0 md:left-[20vh]">
                <PlanetWithParticles />
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center mt-[40vh] md:mt-[45vh]">
                <h2 className="font-semibold text-textgray-200 py-3 text-center">Conectando Mundos, Entregando Sonhos.</h2>
                <div className="  rounded-lg p-8 py-30 ">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}
