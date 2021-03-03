/* eslint-disable */
<Card>
  <Card.Header
    title="Привет"
    subtitle="Так выглядит субтитр"
    suffix={<Button prefixIcon={<Icons.Add />}>Новый предмет</Button>}
  />
  <Card.Divider />
  <Card.Content>
    <FormField label="Метка поля" required>
      <Input placeholder="Заполнитель" />
    </FormField>
  </Card.Content>
</Card>
