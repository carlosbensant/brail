/* eslint-disable-next-line */
export interface TemplatePageProps {
  html: string;
}

export function TemplatePage(props: TemplatePageProps) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}

export default TemplatePage;
