import cons from '../../assets/images/under_construction.svg';

const ErrorView = () => {
    return (
        <>
            <div className="maintain-window-height overflow-hidden flex ng-gray-100 items-center justify-center">
                <div className="h-screen w-screen bg-gray-100 flex items-center">
                    <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                        <div className="max-w-md">
                            <div className="text-5xl font-dark font-bold">Oops! Page Not Loaded Correctly</div>
                            <p
                                className="text-2xl md:text-3xl font-light leading-normal"
                            >Error!!! </p>
                            <p className="mb-8">Looks Like Server Is Not Responding Correctly. Please Try Again Later</p>

                        </div>
                        <div className="max-w-lg">
                            <img src={cons} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
);
}

export default ErrorView;
