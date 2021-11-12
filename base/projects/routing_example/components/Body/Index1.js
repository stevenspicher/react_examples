

const Index1 = (location) => {
    const history = useHistory();

    return (
        <>
            <p>index 1</p>

            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>

            <p>You were redirected from {location.state.from}</p>
        </>
    );
}

export default Index1