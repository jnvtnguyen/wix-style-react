/* eslint-disable */

class TableInfiniteScrollExample extends React.Component {
  state = {
    count: 5,
    hasMore: true,
    baseData: [
    { firstName: 'Meghan', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ],
  };

  componentDidMount() {
    // Simulates a reference for rendered container element with maxHeight
    this.setState({ container: this.containerRef });
  }

  render() {
    const { count, hasMore, container } = this.state;

    return (
      <div ref={ref => (this.containerRef = ref)} style={{ maxHeight: '258px', overflow: 'auto' }}>
        <Table
          data={this._generateData(count)}
          columns={[
            { title: 'First', render: row => row.firstName },
            { title: 'Last', render: row => row.lastName },
          ]}
          infiniteScroll
          // How many rows will be rendered on load
          itemsPerPage={20}
          // Indicates if there is more data to load
          hasMore={hasMore}
          // Function to be called on load
          loadMore={this._fetchMoreData}
          // Element with scroll events for listening
          scrollElement={container}
        >
          <Table.Content />
        </Table>
      </div>
    );
  }

  _fetchMoreData = async (baseData) => {
    const loaded = 10;
    const newData = await StorybookUtils.fetch('/api/table', { load: loaded + 5 });
    this.setState({baseData: newData});
  };

  _generateData = count => {
    let data = [];

    for (let i = 0; i < count; i++) {
      data = data.concat(this.state.baseData);
    }

    return data;
  };
}
