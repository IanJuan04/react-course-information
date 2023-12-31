function Total({ parts }) {
  return (
    <p>
      <strong>
        total of{" "}
        {parts.reduce((a, b) => {
          return a + b.exercises;
        }, 0)}{" "}
        exercises
      </strong>
    </p>
  );
}

export default Total;
