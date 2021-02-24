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

  var containerRef = React.useRef(null);
  React.useEffect(() => setContainer(containerRef), []);

  const renderToolbar = (selectionContext) => {
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

  const _loadMore = () => {
    // Simulates asynchronous loading of data
    setTimeout(() => {
      setCount(count + 5);
    }, 1000);
  };

  const _generateData = (count) => {
    let data = [];

    for (let i = 0; i < count; i++) {
      data = data.concat(records);
    }
    return data;
  };

  return (
    <div
      ref={(ref) => (containerRef = ref)}
      style={{ maxHeight: "258px", overflow: "auto" }}
    >
      <Card>
        <Table
          showSelection
          infiniteScroll={true}
          itemsPerPage={20}
          hasMore={hasMore}
          loadMore={_loadMore}
          scrollElement={container}
          totalSelectableCount={180}
          data={_generateData(count)}
          columns={[
            { title: "First", render: (row) => row.firstName },
            { title: "Last", render: (row) => row.lastName },
          ]}
        >
          <Table.ToolbarContainer>{renderToolbar}</Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
    </div>
  );
};
