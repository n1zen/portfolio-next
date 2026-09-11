import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      {/* About me */}
      <Card>
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
