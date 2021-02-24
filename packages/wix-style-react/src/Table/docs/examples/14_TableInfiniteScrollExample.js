/* eslint-disable */

() => {
  const records = [
    { firstName: "Meghana", lastName: "Bishop" },
    { firstName: "Sara", lastName: "Porter" },
    { firstName: "Deborah", lastName: "Rhodes" },
    { firstName: "Walter", lastName: "Jenning" },
  ];

  const [count, setCount] = React.useState(5);
  const [hasMore, setHasMore] = React.useState(true);
  const [container, setContainer] = React.useState(null);
  const containerRef = React.useRef(null);
  React.useEffect(() => setContainer(containerRef), []);
  const generateData = (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
      data = data.concat(records);
    }
    return data;
  };
  const data = generateData(count);

  const _loadMore = () => {
    // Simulates asynchronous loading of data
    setTimeout(() => {
      setCount(count + 5);
    }, 1000);
  };

  return (
    <div ref={containerRef} style={{ maxHeight: "258px", overflow: "auto" }}>
      <Table
        infiniteScroll
        loadMore={_loadMore}
        itemsPerPage={20}
        hasMore={hasMore}
        scrollElement={container && container.current}
        data={data}
        columns={[
          { title: "First", render: (row) => row.firstName },
          { title: "Last", render: (row) => row.lastName },
        ]}
      >
        <Table.Content />
      </Table>
    </div>
  );
};
