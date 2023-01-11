import TransactionForm from "../../components/TransactionForm";
import TransactionItenary from "../../components/TransactionItenary";
import { PageLayout } from "../../layouts";

const Home = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[50px]">
        <div className="mt-[43px] text-center md:text-left">
          <h1 className="text-[44px] leading-[48px] md:text-[80px] font-bold md:leading-[94px] tracking-[-0.05em] text-dark font-space_grot">
            Be an early bird
          </h1>
          <p
            style={{ color: "rgba(0, 14, 72, 0.62)" }}
            className="mt-[10px] leading-[30px] font-medium text-[16px] md:text-[18px] font-dm_sans"
          >
            It would take months before official project launch, so you should
            buy only if you can wait for the launch to trade your coins.
          </p>
          <TransactionItenary />
        </div>
        <TransactionForm />
      </div>
    </PageLayout>
  );
};

export { Home as default };
