function UserPost() {
  return (
    <div className="pt-5">
      <div className="flex items-center gap-x-4">
        <img
          src={`https://react.semantic-ui.com/images/avatar/small/joe.jpg`}
          alt=""
          className="h-10 w-10 rounded bg-gray-50"
        />
        <div className="text-sm flex flex-col leading-6">
          <p className="font-semibold m-0 text-gray-900">
            <a
              href={`#`}
              className="text-gray-900 hover:text-sky-700 transition font-bold"
            >
              Nguyen Van A
            </a>
          </p>
          <p className="text-gray-400">7 months ago</p>
        </div>
      </div>
      <div className="my-3">
        Hi guys, this is my first post. Hopefully you guys like it ! ✌️✌️
      </div>
      <div>
        <img
          className="object-cover w-full"
          src={`https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/345470007_755552999359751_6050971981847865807_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=REEEp6G1b1AAX8H0Nu5&_nc_ht=scontent.fhan15-2.fna&oh=00_AfB9FNQO0huTP9k5auynfi-kI6QDKWOwIE2YDvs218Dk0A&oe=645EC203`}
          alt=""
        />
      </div>
    </div>
  );
}

export default UserPost;
