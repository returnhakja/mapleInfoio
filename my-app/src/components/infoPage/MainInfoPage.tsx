import style from "./page.module.css";
import Content from "../container/Content";
import Gnb from "../header/Gnb";

export const MainInfoPage = () => {
  const contents = [
    { heading: "컨텐츠1" },
    { heading: "컨텐츠2" },
    { heading: "컨텐츠2" },
    { heading: "컨텐츠2" },
  ];
  return (
    <>
      <header className={style.header}>
        <Gnb />
      </header>
      <div className={style.container}>
        {contents.map((item) => (
          <Content heading={item.heading} />
        ))}
      </div>
    </>
  );
};
