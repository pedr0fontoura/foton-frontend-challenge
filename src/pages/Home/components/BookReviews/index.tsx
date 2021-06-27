import { Container, Cover, Content, Title, Info, Text } from './styles';

const BookReviews = () => {
  return (
    <Container to="/#">
      <Cover>
        <img
          src="https://s3-alpha-sig.figma.com/img/18ee/3c66/8a3aaad596e85f46d30dd3895020cbc8?Expires=1625443200&Signature=MwIzGL8ciSYmIbCbbqtV1QbLpuNXDro-EtolOS~XHe4vYLmsDYG-IiED24N9nLnVcsgCggXiWERWNVXBGyelj1K9sKXt6pPVtz~4hqOb~pVU78QZekXaCJk4KA9EM8aq6c1gEHd~b~cXmDOl5AaKBb-Mh7dtriJzRA63yWyu--Bn0SojXhQBvcHtEPNl9Kk4ZlJ8iKULLj9ep0hyvfDZqoJdzhKDSvEZs7rSfHBtHJnU2~zOfqU4WY-fH2f7EO3-MPURhO2GXHo~k-LEkFHmXZXNftRRj-hi6ykIF0s7AbDs9vNDXPKjp3LVbiOdeLLYU0~MdUTi5bwyMPhP8dbF2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Don't Make Me Think Review"
        />
      </Cover>
      <Content>
        <Title>Don&apos;t Make Me Think - Steve Krug</Title>
        <Info>
          <li>Jesse Showalter</li>
          <li>5.2K Views</li>
          <li>1 Week ago</li>
        </Info>
        <Text>
          &quot;Don&apos;t Make Me Think&quot; by Steve Krug is one of the first books I read when I was getting into
          digital design. It helped me move from designing things that just &quot;look nice&quot; to designing things
          that are usable, useful, memorable and simple to learn and use.
        </Text>
      </Content>
    </Container>
  );
};

export default BookReviews;
