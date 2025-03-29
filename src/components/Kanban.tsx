const Kanban = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Is a Kanban Board?</h2>
          <p className="text-gray-700 mb-3">
            A Kanban board is a visualization tool that enables you to optimize
            the flow of your work. Using a Kanban board to manage work across your
            team or organization can:
          </p>
          <ul className="list-disc list-inside ml-2 text-gray-700 space-y-1">
            <li>Promote focus</li>
            <li>Boost productivity</li>
            <li>Increase visibility</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="space-y-4 text-gray-700">
            <p>
              Visual details are displayed in a single place on a Kanban board,
              minimizing the time spent tracking down progress reports or sitting in
              status update meetings.
            </p>
            <p>
              The goal of a Kanban system is to limit the amount of work in process
              so the work flowing through the system matches its capacity. A system
              can only handle so much traffic while still allowing smooth movement
              through the process steps.
            </p>
            <p>
              A more advanced Kanban board might also include information to help
              actively manage the way work flows through the board, such as process
              policies.
            </p>
            <p>
              Getting started with Kanban doesn't require an organization-wide
              overhaul; it can start with a single team seeking to improve
              visibility and gain control over its workflow and grow from there.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Elements of a Kanban Board</h2>
          <p className="text-gray-700 mb-3">The basic elements of a Kanban board are as follows:</p>
          <ul className="list-disc list-inside ml-2 text-gray-700 space-y-1">
            <li>
              <span className="font-medium">Lanes</span>: Represent defined steps in the process
            </li>
            <li>
              <span className="font-medium">Cards</span>: Represent work items that move through the
              process
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Kanban systems are simple by design and flexible by nature. By simply
            defining your process steps into lanes and documenting your work items
            with cards, you can begin to experience the benefits of Kanban.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Lanes on a Kanban Board</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              The lanes on a Kanban board represent the steps in your process. Each
              vertical lane should reflect a distinct step in your process and move
              sequentially from left to right: From "To Do" to "Done".
            </p>
            <p>
              Of course, most knowledge work follows a more complex process than
              simply "To Do," "Doing," and "Done."
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Kanban Cards</h2>
          <p className="text-gray-700 mb-3">
            Each card on your Kanban board represents a work item. On the "face"
            of the card, you'll include details that make it easy for everyone on
            the board to understand the key details of that piece of work, such
            as:
          </p>
          <ul className="list-disc list-inside ml-2 text-gray-700 space-y-1">
            <li>
              <span className="font-medium">Title</span>: What is this work item?
            </li>
            <li>
              <span className="font-medium">Card description</span>: What exactly is involved in this
              work item? What is the goal or desired end result?
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Kanban;