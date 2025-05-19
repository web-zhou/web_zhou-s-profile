import Link from 'next/link';

export default function Index() {
  return (
    <>
      <div>111</div>
      <Link href="/home">
        <button>To Home</button>
      </Link>
    </>
  );
}
