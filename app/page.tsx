import Card from "./components/Card";
import ProfilePicture from "./components/ProfilePicture";
import Title from "./components/Title";

export default function Home() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {/* About me */}
      <Card className="p-4 flex md:flex-row flex-col gap-8 justify-center items-center">
	<ProfilePicture /> 
        <div className="flex flex-col justify-center items-start my-auto">
	    <Title>About Me</Title>	    
	    <p className="text-xs mt-2">
		I am a fresh computer engineering graduate who loves turning ideas into working prototypes across web, IoT, and Android. I blend embedded systems, micro-controller programming, and basic networking to build simple, reliable, user-ready apps. I'm looking for a place to learn fast, contribute to real projects, and grow with a supportive team.
	    </p>
	</div>
      </Card>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center w-full">
        {/* Projects */}
        <Card className="w-full">
	    <Title>Projects</Title>
        </Card>
        <div className="flex flex-col gap-8 justify-center items-center w-full">
          {/* Skills */}
          <Card className="w-full">
	    <Title>Skills</Title>
	  </Card>
          {/* Resume */}
          <Card className="w-full">
	    <Title>Resume</Title>
	  </Card>
        </div>
      </div>
    </div>
  );
}
