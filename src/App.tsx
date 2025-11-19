import { Bug } from 'lucide-react';

import FileEditorBlp from './Blp.tsx';
import TextButton from './components/TextButton.tsx';

const App = () => (
	<div className="bg-dark-gray flex min-h-dvh flex-col items-stretch overflow-auto overflow-x-hidden">
		<main className="flex max-w-7xl grow flex-col gap-3 p-2 pt-0 md:px-6 xl:mx-auto xl:w-full">
			<FileEditorBlp />
		</main>
		<footer className="flex max-w-7xl items-center justify-center gap-3 p-2 md:px-6 md:py-2 xl:mx-auto xl:w-full">
			<p className="text-blue-gray text-sm">Created by Haaxor1689</p>
			<TextButton
				type="link"
				href="https://github.com/Haaxor1689/blp-convert/issues"
				icon={Bug}
				iconSize={18}
				className="text-blue-gray shrink-0 text-sm"
			>
				Report Bug
			</TextButton>
		</footer>
	</div>
);

export default App;
