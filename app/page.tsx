import Card from "./components/Card";
import ProfilePicture from "./components/ProfilePicture";

export default function Home() {
  return (
    <div>
      {/* About me */}
      <Card>
	<ProfilePicture />
        About me
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
