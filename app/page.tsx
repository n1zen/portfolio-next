import Card from "./components/Card";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <div>
      {/* About me */}
      <Card className="p-8 flex flex-row gap-8">
	<ProfilePicture /> 
        <div>
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
