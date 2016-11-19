import { MultimediaItem } from './MultimediaItem'

/**
 * StudioAlbum
 */
class StudioAlbum extends MultimediaItem {
    constructor(protected band: string, protected title: string) {
        super();
    }

    toString() {
        return `Band: ${this.band} \nTitle: ${this.title}`;
    }
}

export { StudioAlbum }