import { Text, Accordion } from "@mantine/core";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Questions = () => {
  const data = [
    {
      label: "What do I need to open a Monitag account?",
      content:
        "To open a Monitag account, you need your phone number, email address, and your Bank Verification Number.",
    },
    {
      label: "What sort of transactions can I perform with the Monitag app?",
      content:
        "With the Monitag app, you can save, pay bills, send money to other Monitag users, other banks or to contacts on social media, make payments and purchase gift cards & eVouchers.",
    },
    {
      label: "Can I make confidential payments?",
      content:
        "The Monitag app helps you to make confidential payments to contacts on social media. This feature ensures that your name and payment details stay private always.",
    },
    {
      label: "How does the Social Payments feature work?",
      content: "The Social Payments feature allows you to send money directly to your contacts on social media—no account details needed.",
    },
    {
      label: "How can I start growing my savings?",
      content:
        "You can choose to start saving individually, in groups, or through regular group contributions (ajo).",
    },
  ];

  const items = data.map((item) => (
    <Accordion.Item value={item.label} key={item.label} className=" py-4">
      <Accordion.Control>
        <Text size="lg">{item.label}</Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div
      id="questions"
      className="border-t-[1px] border-b-[1px] border-[#73777a]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734868194/samples/chair.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "800px",
      }}
    >
      <div>
        <p className="header-40 font-PoppinsMedium pt-20 text-center">
          Frequently Asked Questions
        </p>
      </div>

      <div className="max-w-[800px] mx-auto mt-10 px-3">
        <Accordion variant="contained">{items}</Accordion>
      </div>

      <div className="mt-10">
        <p className="text-center text-20 font-bold">Got more questions?</p>
      
        <a className="text-1 text-center flex justify-center items-center gap-2" href="mailto:info@monitagtechnologies.com">Send Email to our support team <FaRegArrowAltCircleRight color="gray" /> </a>
      </div>
    </div>
  );
};

export default Questions;
