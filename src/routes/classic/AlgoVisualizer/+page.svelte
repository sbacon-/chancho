<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer
          project="AlgoVisualizer"
          ,
          name="Sort Algorithm Visualizer"
        />
      </section>
      <section class="text">
        <h3>Sort Algorithms</h3>
        <br />
        <p>
          <u>Bubble Sort</u> - <strong>O(n<sup>2</sup>)</strong> Comparisons,
          <strong>O(n<sup>2</sup>)</strong>
          Swaps <br />
          The least efficient of the sort methods will simply compare the first node
          with it's neighbor. Swapping if it is greater than it's neighboring node.
          This process is repeated until it reaches the last unsorted node. When
          the last unsorted node is at index 0, the node is ,in fact, sorted by omission.
          This sort algorithm can be useful when the array is quite small, as the
          code is simple, however becomes very slow as <em> n </em> increases.
          <br /><br />
          <u>Selection Sort</u> - <strong>O(n<sup>2</sup>)</strong> Comparisons,
          <strong>O(n)</strong>
          Swaps <br />
          Is a marginally more efficient algorithm, starting at the first unsorted
          node, the script will loop through and determine the minimum node and move
          it to the start of the array. It is considered more efficent than the bubble
          sort as the node is only swapped once the end of the array is reached.
          It is similar to bubble sort in that the code is very simple, but ineffective
          when working with larger sets of data.
          <br /><br />
          <u>Insertion Sort</u> - <strong>O(n<sup>2</sup>)</strong> Comparisons,
          <strong>O(n<sup>2</sup>)</strong>
          Swaps <br />
          Though the average efficiency is comperable to the previous two sort algorithms,
          the insertion sort tends to sort slightly faster. Starting at the first
          unsorted element it will work backwards until it finds a node that has
          a higher value. This can reduce comparisons in a best case scenario where
          the unsorted node is higher than the next node. Another useful property
          of the insertion sort algorithm is that unsorted elements can be continually
          added. This is useful in the case of a high-score board, where it would
          be inefficient to sort the entire list to add a single entry.
          <br /><br />
          <u>Merge Sort</u> - <strong>Θ(n log n)</strong> Comparisons,
          <strong>O(n)</strong>
          Auxiliary Array<br />
          Rather than performing any swaps, a much more effective method of sorting
          is to use a Merge Sort. This algorithms breaks each node into it's own
          "sorted array" of size 1. Comparing each array with the first element of
          its neighboring array, it pulls the lowest node (and moves to the next
          node if the array size is greater than one) then pulls the remaining nodes
          least to greatest to a new array. This new sorted array is twice the length
          of the previous array. Repeating this process until the sorted array is
          of size <em>n</em>. In my opinion this may not be the most elegant
          solution as it requires an auxillary array to hold the nodes as they
          are being sorted.
          <br /><br />
          <u>Quick Sort</u> - <strong>O(n log n)</strong> <br />
          Is probably the most effective sort covered in this study. The way this
          one works is to choose a node from the array at random. (Ideally close
          to the median value) This value become the "pivot". The array is split
          into two new partitions on each side of the pivot. The partition on the
          left side of the pivot is iterated until a vaule is found that is greater
          than or equal to the pivot. Then the right side partition is iterated until
          a value is found that is less than or equal to the pivot. Once each side
          has found a value, the nodes are swapped. Continuing this process will
          put all nodes less than the pivot on the left side partition, and the nodes
          larger than the pivot on the right side. This ensures that the pivot is
          in the correct place of the array. A pivot is chosen in the left and right
          partions and new sub-partitions are created. The divide and conquer type
          of sorting seems to be the quickest method.
          <br /><br />
          <u>Heap Sort</u> - <strong>O(n log n)</strong> <br />
          I found this algorithm to be the most fascinating in it's approach to the
          task of sorting. The way a heap sort works is to first organize the nodes
          into a tree data structure called a heap. The structure of the heap is
          such that each parent node is parent to two children nodes that are smaller
          than the parent, these child nodes follow the same structure until the
          entire array is "heapified". The heap is stored in an array as follows
          <br />[0,1,2,3,4,5] - 0 is a parent of 1 and 2, 1 is a parent of 3 and
          4, and 2 is a parent of 5.<br />
          The formula for finding relationships to current node at index
          <em>i</em>
          is:<br />
          <code>
            iParent(i)=floor((i-1)/2);<br />
            iLeftChild(i)=2i+1;<br />
            iRightChild(i)=2i+2;<br />
          </code>
          Once the the array is heapified, it is simply a matter of pulling the top
          most node and swapping with the last element in the heap. Once the smallest
          node is at the top, you swap with the larger of it's two children until
          the heap data structure is satisfied (being that the children of the node
          smaller than the parent node). You then continue pulling the top node until
          the list is beautifully sorted.
          <br /><br />
          Source code is provided below, it isn't incredibly effecient as is as it
          is used for the visualizer seen above. But I plan to add an implementable
          version of the sort methods. Eventually.<br />
          SOURCE:
          <a href="https://github.com/sbacon-/SortAlgorithms">
            /sbacon-/SortAlgorithms
          </a>
        </p>
      </section>
    </article>
    <footer>
      <div>
        Contact:
        <a href="mailto:tom@chancho.dev">Email</a> or
        <a href="tel:+14703802933">Call</a>
      </div>
    </footer>
  </div>
</div>
