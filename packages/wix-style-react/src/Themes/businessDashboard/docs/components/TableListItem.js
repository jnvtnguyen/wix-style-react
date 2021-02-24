export const playground = `
  <ThemeProvider theme={theme()}>
    <Card>
      <Card.Content>
        <TableListItem
          verticalPadding="small"
          showDivider
          options={[
            { value: 'First and onClick' },
            { value: '7 posts' },
            { value: 'Last update on 27 April 2020' },
          ]}
          onClick={() => { }}
        />
        <TableListItem
          verticalPadding="small"
          showDivider
          options={[
            { value: 'Second' },
            { value: '7 posts' },
            { value: 'Last update on 28 April 2020' },
          ]}
        />
        <TableListItem
          verticalPadding="small"
          showDivider
          options={[
            { value: 'Third and onClick' },
            { value: '7 posts' },
            { value: 'Last update on 28 April 2020' },
          ]}
          onClick={() => { }}
        />
      </Card.Content>
    </Card>
  </ThemeProvider>
`;
