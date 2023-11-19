import { FunctionComponent } from "react";
import { Container, Box, Button, Text } from '@chakra-ui/react'; // Import Chakra UI components
import QRCode from 'qrcode.react';

interface CodeProps {
  value: string;
}

const Code: FunctionComponent<CodeProps> = (props) => {
  const { value } = props;

  const dispatchEvent = async (value: string) => {
    console.log('data to ext:', value);
    const msg = btoa(value);
    const hrefValue = `iden3comm://?i_m=${msg}`;
    console.log('link to ext:', hrefValue);

    const _authEvent = new CustomEvent('authEvent', { detail: hrefValue });
    document.dispatchEvent(_authEvent);
  };

  return (
    <Container>
      <Box w={[400]}>
        <QRCode level={"L"} size={400} value={value} />
      </Box>
      <Button onClick={() => dispatchEvent(value)}
        variant="outline" size="lg" mt="15px" w="100%">
            <Text textColor="black">Polygon ID</Text></Button>
    </Container>
  );
};

export default Code;