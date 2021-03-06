import { FC } from 'react'
import BoxWithImage from './BoxWithImage'
import BoxWithHandle from './BoxWithHandle'

export const Container: FC = () => (
	<div>
		<div style={{ marginTop: '1.5rem' }}>
			<BoxWithHandle />
			<BoxWithImage />
		</div>
	</div>
)
