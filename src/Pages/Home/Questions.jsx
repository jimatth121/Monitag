import { Text, Accordion } from "@mantine/core";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Questions = () => {
  const data = [
    {
      label: "How does the Social Payments feature work?",
      content:
        "It allows you to send money directly to your contacts on social media—no account details needed.",
    },
    {
      label: "Are there any fees for transactions?",
      content: "No, there are no fees for transactions.",
    },
    {
      label: "How can I make confidential payments?",
      content:
        "You can make confidential payments by selecting the confidential option during the transaction.",
    },
    {
      label: "What’s the interest rate on Monitag savings?",
      content: "The interest rate on Monitag savings is 3.5% per annum.",
    },
    {
      label: "What’s the interest rate on Monitag savings account?",
      content: "The interest rate on Monitag savings is 3.5% per annum.",
    },
    {
      label: "What’s the interest rate on Monitag current account?",
      content: "The interest rate on Monitag savings is 3.5% per annum.",
    },
  ];

  const items = data.map((item) => (
    <Accordion.Item value={item.label} key={item.label} className="  md:py-4">
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
      className="border-t-[1px] border-b-[1px] border-[#73777a]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734868194/samples/chair.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "900px",
      }}
    >
      <div>
        <p className="header-40 font-bold pt-20 text-center">
          Frequently Asked Questions
        </p>
      </div>

      <div className="max-w-[800px] mx-auto mt-10 px-3">
        <Accordion variant="contained" defaultValue={data[0].label}>
          {items}
        </Accordion>
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
