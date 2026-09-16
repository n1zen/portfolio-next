import Card from "./components/Card";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {/* About me */}
      <Card className="p-2 flex flex-row gap-8">
	<ProfilePicture /> 
        <div className="flex flex-col justify-center items-center my-auto">
	    <h5>About Me</h5>
	    <p>Lorem ipsum dolor</p>
	</div>
      </Card>
      <div>
        {/* Projects */}
        <Card>
          Projects
        </Card>
        <div>
          {/* Skills */}
          <Card>Skills</Card>
          {/* Resume */}
          <Card>Resume</Card>
        </div>
      </div>
    </div>
  );
}
