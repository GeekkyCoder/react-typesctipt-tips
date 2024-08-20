interface ChildProps {
  style: {
    height: string;
    index: number;
  };
}

function Child(props: ChildProps) {
  console.log(`${props.style.index} ran`);

  return <div style={{ height: props.style.height }}>Child</div>;
}

export default Child;
