import Card from "./components/Card";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {/* About me */}
      <Card className="p-4 flex md:flex-row flex-col gap-8 justify-center items-center">
	<ProfilePicture /> 
        <div className="flex flex-col justify-center items-start my-auto">
	    <h5 className="font-bold text-xl font-heading">About Me</h5>
	    <p className="text-xs mt-2">
		I am a fresh computer engineering graduate who loves turning ideas into working prototypes across web, IoT, and Android. I blend embedded systems, micro-controller programming, and basic networking to build simple, reliable, user-ready apps. I'm looking for a place to learn fast, contribute to real projects, and grow with a supportive team.
	    </p>
	</div>
      </Card>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
        {/* Projects */}
        <Card>
          Projects
        </Card>
        <div className="flex flex-col gap-8 justify-center items-center">
          {/* Skills */}
          <Card>Skills</Card>
          {/* Resume */}
          <Card>Resume</Card>
        </div>
      </div>
    </div>
  );
}
