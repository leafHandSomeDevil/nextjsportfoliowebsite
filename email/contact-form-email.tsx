/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Body,
  Button,
  Container,
  Hr,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string,
  senderEmail: string,
}

export default function ContactFormEmail({
  message, senderEmail
}: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">You reaceived the following message from the contact form</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is: {senderEmail} </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
}
