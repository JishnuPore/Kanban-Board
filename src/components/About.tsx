const About = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        <p className="text-lg text-gray-700 mb-8">
          We are dedicated to simplifying workflow management through intuitive
          and effective Kanban board solutions. Our goal is to help teams
          visualize their work, enhance productivity, and streamline processes
          seamlessly.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-medium">Email: </span>
              support@kanbanboard.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone: </span>
              +91 (123) 456-7890
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Address: </span>
              123 Kanban Street, Workflow City, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
