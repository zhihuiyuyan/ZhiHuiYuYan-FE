export function geneGridLinks(name: string) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-lightBlue p-4 text-blue-500 shadow">
      {name}{' '}
    </div>
  );
}
export const additionalElem = (
  <div className="my-6 grid w-[45vw] grid-cols-3 grid-rows-2 gap-4">
    {geneGridLinks('科研助手')}
    {geneGridLinks('科研助手')}
    {geneGridLinks('科研助手')}
    {geneGridLinks('科研助手')}
    {geneGridLinks('科研助手')}
    {geneGridLinks('科研助手')}
  </div>
);

export const randomFunc = (left: number, right: number) =>
  Math.floor(Math.random() * right + left);
