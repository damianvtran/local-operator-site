import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		caption: string;
	}
	interface PaletteOptions {
		caption?: string;
	}
}

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#38C96A',
			dark: '#16B34A',
			light: '#68D88E',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#26BC85',
			dark: '#0AA26D',
			light: '#52CF9D',
			contrastText: '#ffffff',
		},
		background: {
			default: '#0A0A0A',
			paper: '#141414',
		},
		text: {
			primary: '#F9FAFB',
			secondary: '#9CA3AF',
		},
		caption: 'rgba(255, 255, 255, 0.8)',
	},
	typography: {
		fontFamily: 'system-ui, Inter, -apple-system, BlinkMacSystemFont, sans-serif',
		fontSize: 16,
		h1: { fontWeight: 600 },
		h2: { fontWeight: 600 },
		h3: { fontWeight: 600 },
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#0A0A0A',
					borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(8px)',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: 6,
					fontWeight: 500,
					padding: '8px 16px',
				},
				contained: {
					boxShadow: 'none',
					'&:hover': {
						boxShadow: 'none',
					},
				},
				outlined: {
					borderColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						borderColor: '#38C96A',
						backgroundColor: 'rgba(56, 201, 106, 0.08)',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#141414',
					borderRadius: 12,
					border: '1px solid rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(8px)',
				},
			},
		},
	},
});

export default theme;