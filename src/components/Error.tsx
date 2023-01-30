interface IErro {
  error: string;
}
export const Error = ({ error }: IErro) => {
  return <p className="text-center text-red-600">{error}!!!</p>;
};
