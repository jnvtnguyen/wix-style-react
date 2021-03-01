/* eslint-disable */

() => {
  const containerRef = React.useRef(null);
  const [data, setData] = React.useState([
    { firstName: 'Meghana', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ]);
  const [container, setContainer] = React.useState(null);
  let loaded = React.useRef(2);

  const fetchMoreData = () => {
    setTimeout(() => {
      loaded.current++;

      Promise.resolve(StorybookUtils.fetch('/api/table', { load: loaded.current }))
        .then(data => {
          setData(data);
        })
        .catch(e => console.error(e));
    }, 2000);
  };

  React.useEffect(() => {
    setContainer(containerRef);
    fetchMoreData();
  }, []);

  const columns = [
    { title: 'First', render: row => row.firstName },
    { title: 'Last', render: row => row.lastName },
  ];
  return (
    <div
      ref={ref => (this.containerRef = ref)}
      style={{ maxHeight: '258px', overflow: 'auto' }}
    >
      <Table
        data={data}
        columns={columns}
        infiniteScroll
        hasMore={true}
        loadMore={fetchMoreData}
        itemsPerPage={20}
        scrollElement={container && container.current}
      >
        <Table.Content />
      </Table>
    </div>
  );
};
