/* eslint-disable */

() => {
  const initialData = [
    { firstName: 'Meghana', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ];

  var containerRef = React.useRef(null);

  const [count, setCount] = React.useState(5);
  const [data, setData] = React.useState([]);
  const [container, setContainer] = React.useState(null);

  const simulateFetchFromServer = () => {
    setTimeout(() => {
      let data = [];
      const more = count + 5;
      for (let i = 0; i < more; i++) {
        data = data.concat(initialData);
      }
      setCount(more);
      setData(data);
    }, 1000);
  };

  React.useEffect(() => {
    setContainer(containerRef);
    simulateFetchFromServer();
  }, []);

  const columns = [
    { title: 'First', render: row => row.firstName },
    { title: 'Last', render: row => row.lastName },
  ];

  const renderToolbar = selectionContext => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.SelectedCount>{`${selectionContext.selectedCount} Selected`}</TableToolbar.SelectedCount>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  return (
    <div
      ref={containerRef}
      style={{ maxHeight: '258px', overflow: 'auto' }}
    >
      <Card>
        <Table
          infiniteScroll
          loadMore={simulateFetchFromServer}
          itemsPerPage={20}
          hasMore={true}
          scrollElement={container && container.current}
          totalSelectableCount={180}
          showSelection
          data={data}
          columns={columns}
        >
          <Table.ToolbarContainer>{renderToolbar}</Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
    </div>
  );
};
