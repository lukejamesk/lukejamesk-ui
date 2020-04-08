import { forEach, keys, sort, comparator, lt, compose } from 'ramda'

const getKeys = compose(sort(comparator(lt)), keys)

const testPackageExports = (name, library) => {
  describe(name, () => {
    it('should match snapshot', () => {
      expect(getKeys(library)).toMatchSnapshot()
    })

    it('should not have undefined exports', () => {
      forEach((exportKey) => {
        expect(Boolean(library[exportKey])).toEqual(true)
      }, getKeys(library))
    })
  })
}

export default testPackageExports
