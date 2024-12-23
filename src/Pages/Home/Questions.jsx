import { Text, Accordion } from "@mantine/core";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Questions = () => {
  const data = [
    {
      label: "How do I send money on Monitag?",
      content:
        "You can send money easily through standard, confidential or Monitag payments.",
    },
    {
      label: "How does the social payments feature work?",
      content:
        "The Social Payments feature allows you to send money directly to your contacts on social media—no account details needed.",
    },
    {
      label: "Are there any fees for transactions?",
      content:
        "Transaction fees vary based on the type of transaction being performed.",
    },
    {
      label: "Can I make confidential payments?",
      content: "Yes, you can make confidential payments via the app.",
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
        <p className="text-1 text-center flex justify-center items-center gap-2">
          Chat with our support team <FaRegArrowAltCircleRight color="gray" />
        </p>
      </div>
    </div>
  );
};

export default Questions;
