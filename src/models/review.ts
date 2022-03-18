export default interface Review {
    _id: string,
    userId: string,
    vote: VoteTypes,
    comment: string,
    // TODO: images
}

export enum VoteTypes {
    good = "good",
    bad = "bad",
    meh = "meh",
}