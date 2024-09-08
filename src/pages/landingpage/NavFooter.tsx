import { Image, Text, Container, ActionIcon, Group } from '@mantine/core';
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Logo from '@/asset/logo.png';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

const NavFooter = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        component="a"
        href={link.link}
        style={{ display: 'block', color: 'var(--mantine-color-gray-6)', fontSize: 'var(--mantine-font-size-sm)', padding: '3px 0' }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title} style={{ width: '160px' }}>
        <Text style={{ fontSize: 'var(--mantine-font-size-lg)', fontWeight: 700, fontFamily: 'Greycliff CF, var(--mantine-font-family)', marginBottom: 'calc(var(--mantine-spacing-xs) / 2)', color: 'var(--mantine-color-black)' }}>
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer style={{ width:'100vw', marginTop: '120px', paddingTop: 'calc(var(--mantine-spacing-xl) * 2)', paddingBottom: 'calc(var(--mantine-spacing-xl) * 2)', backgroundColor: 'var(--mantine-color-gray-0)', borderTop: '1px solid var(--mantine-color-gray-2)' }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={Logo} alt="" width={150} height={150} style={{ maxWidth: '200px' }} />
          <Text size="xs" color="dimmed" style={{ marginTop: '5px', textAlign: 'center' }}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{groups}</div>
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--mantine-spacing-xl)', paddingTop: 'var(--mantine-spacing-xl)', paddingBottom: 'var(--mantine-spacing-xl)', borderTop: '1px solid var(--mantine-color-gray-2)' }}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaFacebookF size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaXTwitter size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaYoutube size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <AiFillInstagram size={24} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default NavFooter;
