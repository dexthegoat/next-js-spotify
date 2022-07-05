import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Spotify logo"
      />

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-[#18d860] text-white p-5 rounded-full mt-4"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
