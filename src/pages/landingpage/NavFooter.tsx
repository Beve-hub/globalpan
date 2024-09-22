import { Image, Text,  ActionIcon, Group, Button, Flex, } from '@mantine/core';
import { FaXTwitter, FaFacebookF, FaYoutube, } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Logo from '@/asset/logo.png';
import { MdEmail } from "react-icons/md";
import { Color } from '@/utils/reusable/Theme';

const data = [
  {
    title: 'Our Company',
    links: [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Investment', link: '/investment' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: '+1(839) 253 6890', link: '#' },
      { label: 'support@panglobal.com', link: '#' },
      { label: '106 New St, England B2 4JU United Kingdom', link: '#' },
   
    ],
  }
];

const NavFooter = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        component="a"
        href={link.link}
        style={{ display: 'block', color: Color.GRAY, fontSize: '16px', padding: '3px 0' }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title} style={{ width: '160px' }}>
        <Text style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Greycliff CF, var(--mantine-font-family)', marginBottom: 'calc(var(--mantine-spacing-xs) / 2)', color: Color.BLACK }}>
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer style={{  paddingTop: 'calc(var(--mantine-spacing-xl) * 2)', paddingBottom: 'calc(var(--mantine-spacing-xl) )', backgroundColor: Color.WHITE, borderTop: '1px solid var(--mantine-color-gray-2)' }}>
      <Flex   gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      style={{width:'100%'}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={Logo} alt="" width={70} height={70} style={{ maxWidth: '200px' }} />
          <Text size="xs" color={Color.GRAY} style={{ marginTop: '5px', textAlign: 'start',width:'100%',maxWidth:'20rem' }}>
            Build fully functional accessible  for our clients and employees while adhering to principles of excellence and trust.
          </Text>
        </div>
        <div style={{gap:70,display: 'flex', flexWrap: 'wrap' }}>
        {groups}
            
            <div>
                <Text  color="black" mt="5px"  fw="bold" fz="20px">
                News Letter
                </Text>
                <Text size="md" color="dimmed" style={{ width:'100%',maxWidth: '16rem', flexWrap: 'wrap' }}>
                Sign up to our weekly newsletter to get the latest updates.
                </Text>
                <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  <input type="text" placeholder="Enter your email" style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'Color.WHITE', border: 'none' }} />
                  <Button size="sm" color={Color.PRIMARY} variant="filled">
                    <MdEmail size={24}/>
                  </Button>
                </form>              
            </div>
        </div>
      </Flex>
      <Flex
      mx="20"
       gap="xl"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap" style={{ marginTop: 'var(--mantine-spacing-xl)', paddingTop: 'var(--mantine-spacing-xl)',  borderTop: '1px solid var(--mantine-color-gray-2)' }}>
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
      </Flex>
    </footer>
  );
}

export default NavFooter;
