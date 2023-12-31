import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getFavouriteListing from "../actions/getFavouriteListing";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavouriteListing();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favourite found"
                    subtitle="Looks like you have no favourite listings"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;