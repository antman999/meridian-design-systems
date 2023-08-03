import React from 'react';
import { Button } from '../Button';
import { Badge } from '../Badge/Badge';

const SkeletonPage = () => {
  return (
    <div style={{ minHeight: '100vh', marginTop: '64px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src='/small-logo.png' alt='MDS Logo' width='400' height='150' />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>SkeletonPage Page Content</h1>
        <p>
          This is a SkeletonPage page used for testing layouts or components.
        </p>
        <Badge status='positive'>Example 1</Badge>
        <Badge status='negative'>Example 2</Badge>
        <Badge status='neutral'>Example 3</Badge>
      </div>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <h2>Why do we use it?</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <h2>Where does it come from?</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </p>
      <h2>Where can I get some?</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>

      <h2>Sample lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        fringilla dolor. Sed ornare ex convallis, tincidunt quam nec, viverra
        massa. Sed facilisis, metus nec elementum hendrerit, nulla magna
        tincidunt neque, vitae varius lacus mi et lectus. In lobortis urna
        fringilla sodales sagittis. Sed faucibus id arcu eget consectetur. In
        fringilla turpis eu turpis vehicula, eget vehicula odio gravida. Donec
        iaculis semper nisi, et ullamcorper augue ultrices ut. Morbi lacinia
        semper magna, id euismod arcu luctus nec. Sed porttitor arcu sit amet
        pulvinar ullamcorper. Phasellus semper justo et mauris suscipit, eget
        finibus nunc vehicula. Sed dignissim tellus nec est ullamcorper, in
        viverra mauris iaculis. Nullam molestie purus nec massa scelerisque
        ornare. Vivamus mollis ligula eget posuere volutpat. Integer lobortis
        urna eu ultrices sagittis. Mauris quis nisi nisi. Etiam efficitur nisi
        ante, at vestibulum nunc varius sit amet. Donec lobortis ex ac enim
        ultrices congue. Nunc vestibulum feugiat urna, at luctus ex scelerisque
        sagittis. Nulla vitae sapien a purus euismod luctus at vel enim. Aenean
        vehicula consequat sem, non rhoncus ipsum imperdiet ac. Ut laoreet
        tincidunt tincidunt. Suspendisse quis lacus vitae mauris dapibus aliquet
        in vel lorem. Duis sagittis malesuada massa ac faucibus. Etiam eget dui
        placerat metus scelerisque luctus. Fusce sed sem iaculis, tincidunt sem
        placerat, scelerisque quam. Nam porta dui sit amet ex sodales feugiat in
        vitae metus. Quisque tristique malesuada nulla ac condimentum. Curabitur
        a turpis tincidunt, fermentum lacus in, vehicula risus. In ornare sapien
        purus, id sollicitudin massa auctor sed. Ut vitae arcu facilisis,
        lobortis erat ut, dictum ligula. Curabitur sed leo interdum, commodo
        lectus in, convallis odio. Cras scelerisque, dolor at tempus fringilla,
        neque mi maximus tortor, non vestibulum erat magna quis lorem. Nulla non
        ex nec enim ornare facilisis egestas eget elit. Aliquam eu euismod nunc,
        ac semper lorem. Morbi rhoncus mauris non mollis aliquet. Nullam
        lobortis lorem at congue feugiat. Etiam tempor mi sit amet sem commodo,
        sagittis pretium lorem ornare. Cras consequat libero nec tincidunt
        euismod. Maecenas at libero tristique, consequat tellus a, venenatis
        tortor. Integer sodales justo vitae augue elementum mattis. Phasellus
        massa est, euismod eu mi eu, ultrices porta enim. Aliquam cursus laoreet
        nisi, a mollis est sollicitudin eu. In fringilla maximus gravida. Nunc
        ut pharetra risus. Pellentesque non lobortis lectus. Etiam pharetra
        lectus eu iaculis dapibus. Praesent ultrices ullamcorper erat ac
        sagittis. Cras mattis quam sit amet dui auctor malesuada. Duis nec ex
        sed ligula auctor aliquet ut eget urna. Nam in dui leo. Nunc non lacus
        eu nunc laoreet gravida in fringilla diam. Duis semper in nisl at
        varius. Nulla ornare, nulla vitae varius posuere, quam dui molestie
        dolor, sed bibendum massa neque eget nunc. Aliquam maximus urna odio,
        sed consequat mi tristique id. Donec lacus velit, vestibulum vitae est
        quis, placerat sagittis nisi.vallis odio. Cras scelerisque, dolor at
        tempus fringilla, neque mi maximus tortor, non vestibulum erat magna
        quis lorem. Nulla non ex nec enim ornare facilisis egestas eget elit.
        Aliquam eu euismod nunc, ac semper lorem. Morbi rhoncus mauris non
        mollis aliquet. Nullam lobortis lorem at congue feugiat. Etiam tempor mi
        sit amet sem commodo, sagittis pretium lorem ornare. Cras consequat
        libero nec tincidunt euismod. Maecenas at libero tristique, consequat
        tellus a, venenatis tortor. Integer sodales justo vitae augue elementum
        mattis. Phasellus massa est, euismod eu mi eu, ultrices porta enim.
        Aliquam cursus laoreet nisi, a mollis est sollicitudin eu. In fringilla
        maximus gravida. Nunc ut pharetra risus. Pellentesque non lobortis
        lectus. Etiam pharetra lectus eu iaculis dapibus. Praesent ultrices
        ullamcorper erat ac sagittis. Cras mattis quam sit amet dui auctor
        malesuada. Duis nec ex sed ligula auctor aliquet ut eget urna. Nam in
        dui leo. Nunc non lacus eu nunc laoreet gravida in fringilla diam. Duis
        semper in nisl at varius. Nulla ornare, nulla vitae varius posuere, quam
        dui molestie dolor, sed bibendum massa neque eget nunc. Aliquam maximus
        urna odio, sed consequat mi tristique id. Donec lacus velit, vestibulum
        vitae est quis, placerat sagittis nisi.
      </p>
    </div>
  );
};

export default SkeletonPage;
