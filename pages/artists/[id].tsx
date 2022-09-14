import { IMG_STORAGE, TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import { ArtistPage } from '@sections/Artist/Artist';
import type { NextPage } from 'next';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { ARTISTS } from '@sections/Artists/constants';

type ArtistPageProps = { id: string };

const CurrentArtistPage: NextPage<SharedProps & ArtistPageProps> = ({
  menuOpen,
  id,
}) => {
  const url = useAbsoluteUrl();
  const artist = ARTISTS.find((artist) => artist.id == id);

  return (
    <>
      <PageHead
        title={artist?.name ?? 'Unknown'}
        subtitle={TITLES.ARTISTS}
        description={artist?.descriptionEn}
        image={`${IMG_STORAGE}/avatars/${artist?.avatar || 'placeholder.png'}`}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Artists',
              item: url('/artists'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: artist?.name ?? id,
            },
          ],
        }}
        canonical={`/artists/${id}`}
      />
      <ArtistPage menuOpen={menuOpen} id={id} />
    </>
  );
};

export default CurrentArtistPage;

export function getStaticProps({ params }: { params: ArtistPageProps }) {
  return { props: params };
}

export function getStaticPaths() {
  return {
    paths: ARTISTS.map((artist) => ({
      params: { id: artist.id.toString() },
    })),
    fallback: false,
  };
}
